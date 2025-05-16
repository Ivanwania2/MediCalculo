export const loginModalHTML = `
<div class="modal fade" id="loginModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Entrar</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form id="loginForm">
          <div class="mb-3">
            <label for="loginEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="loginEmail" required>
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Senha</label>
            <input type="password" class="form-control" id="loginPassword" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Entrar</button>
        </form>
        <hr>
        <button class="btn btn-outline-primary w-100" onclick="showRegisterForm()">Criar conta</button>
      </div>
    </div>
  </div>
</div>`;

export const registerModalHTML = `
<div class="modal fade" id="registerModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Criar Conta</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form id="registerForm">
          <div class="mb-3">
            <label for="registerEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="registerEmail" required>
          </div>
          <div class="mb-3">
            <label for="registerPassword" class="form-label">Senha</label>
            <input type="password" class="form-control" id="registerPassword" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Criar conta</button>
        </form>
      </div>
    </div>
  </div>
</div>`;

export const subscriptionModalHTML = `
<div class="modal fade" id="subscriptionModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Escolha seu plano</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div class="row g-3">
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Plano Mensal</h5>
                <h6 class="card-subtitle mb-2 text-muted">R$ 14,90/mês</h6>
                <ul class="list-unstyled">
                  <li>✓ Impressão ilimitada</li>
                  <li>✓ Geração de PDF</li>
                  <li>✓ Suporte prioritário</li>
                </ul>
                <button onclick="subscribe('monthly')" class="btn btn-primary w-100">Assinar</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Plano Anual</h5>
                <h6 class="card-subtitle mb-2 text-muted">R$ 134,10/ano</h6>
                <p class="text-success">Economize 25%!</p>
                <ul class="list-unstyled">
                  <li>✓ Impressão ilimitada</li>
                  <li>✓ Geração de PDF</li>
                  <li>✓ Suporte prioritário</li>
                </ul>
                <button onclick="subscribe('annual')" class="btn btn-primary w-100">Assinar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;