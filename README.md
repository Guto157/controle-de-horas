# Meu Ponto

Aplicativo web para registrar jornadas, acompanhar horas extras e estimar valores por adicional.

## Como usar

1. Abra o aplicativo pelo GitHub Pages.
2. Entre em **Config.** e informe salário, divisor mensal, jornada diária, dia de fechamento e percentuais.
3. Registre cada jornada na aba **Ponto**.
4. Consulte os totais nas abas **Horas** e **Valores**.
5. Use **Exportar backup** para guardar uma cópia dos dados.

## Armazenamento

Configurações e registros ficam no armazenamento local do navegador do aparelho. Não há servidor, conta ou Supabase. Exporte e importe um backup para transferir os dados manualmente. Limpar os dados do navegador pode apagar os registros.

## Regras desta primeira versão

O cálculo considera como hora extra o tempo trabalhado acima da jornada diária configurada. O adicional aplicado depende do dia da semana ou da marcação manual de feriado. Feriados devem ser marcados no registro. Regras de convenção coletiva, banco de horas, adicional noturno, escalas e bases legais podem alterar o resultado. O valor exibido é uma estimativa e não substitui a folha oficial.

## Publicar no GitHub Pages

No repositório, acesse **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, depois salve.
