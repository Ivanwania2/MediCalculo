/*
  # Criar tabela de assinaturas

  1. Nova Tabela
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `plan_type` (text) - 'monthly' ou 'annual'
      - `status` (text) - 'active' ou 'cancelled'
      - `current_period_end` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS
    - Add policies for user access
*/

CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  plan_type text NOT NULL CHECK (plan_type IN ('monthly', 'annual')),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled')),
  current_period_end timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own subscription"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);