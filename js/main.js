import { signIn, signUp, signOut, getSubscription, createSubscription } from './auth.js';
import { PLANS, formatPrice } from './subscription.js';
import { loginModalHTML, registerModalHTML, subscriptionModalHTML } from './modals.js';

let currentUser = null;
let currentSubscription = null;

async function checkAuth() {
  const subscription = await getSubscription();
  currentSubscription = subscription;
  updateUI();
}

function updateUI() {
  const loginBtn = document.getElementById('loginBtn');
  const subscribeBtn = document.getElementById('subscribeBtn');
  const userEmail = document.getElementById('userEmail');
  
  if (currentUser) {
    loginBtn.textContent = 'Sair';
    userEmail.textContent = currentUser.email;
    userEmail.style.display = 'block';
    
    if (currentSubscription) {
      subscribeBtn.style.display = 'none';
    } else {
      subscribeBtn.style.display = 'block';
    }
  } else {
    loginBtn.textContent = 'Entrar';
    userEmail.style.display = 'none';
    subscribeBtn.style.display = 'none';
  }
}

window.showLoginModal = () => {
  if (currentUser) {
    signOut();
    currentUser = null;
    currentSubscription = null;
    updateUI();
    return;
  }
  
  const modal = new bootstrap.Modal(document.getElementById('loginModal'));
  modal.show();
};

window.showRegisterForm = () => {
  const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
  loginModal.hide();
  const modal = new bootstrap.Modal(document.getElementById('registerModal'));
  modal.show();
};

window.showSubscriptionModal = () => {
  const modal = new bootstrap.Modal(document.getElementById('subscriptionModal'));
  modal.show();
};

window.subscribe = async (planType) => {
  const { data, error } = await createSubscription(planType);
  if (error) {
    alert('Erro ao criar assinatura');
    return;
  }
  
  currentSubscription = data;
  const modal = bootstrap.Modal.getInstance(document.getElementById('subscriptionModal'));
  modal.hide();
  updateUI();
};

document.addEventListener('DOMContentLoaded', () => {
  // Adicionar modais ao DOM
  document.body.insertAdjacentHTML('beforeend', loginModalHTML);
  document.body.insertAdjacentHTML('beforeend', registerModalHTML);
  document.body.insertAdjacentHTML('beforeend', subscriptionModalHTML);
  
  // Configurar formulários
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const { data, error } = await signIn(email, password);
    if (error) {
      alert('Erro ao fazer login');
      return;
    }
    
    currentUser = data.user;
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
    checkAuth();
  });
  
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    const { data, error } = await signUp(email, password);
    if (error) {
      alert('Erro ao criar conta');
      return;
    }
    
    currentUser = data.user;
    const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();
    checkAuth();
  });
  
  // Verificar botões de impressão/PDF
  const printBtn = document.getElementById('btnDownload');
  const downloadBtn = document.getElementById('btnDownload');
  
  const checkSubscription = (e) => {
    if (!currentUser) {
      e.preventDefault();
      showLoginModal();
      return;
    }
    
    if (!currentSubscription) {
      e.preventDefault();
      showSubscriptionModal();
    }
  };
  
  printBtn.addEventListener('click', checkSubscription);
  downloadBtn.addEventListener('click', checkSubscription);
  
  checkAuth();
});