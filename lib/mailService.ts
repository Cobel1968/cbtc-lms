import * as sib from '@getbrevo/brevo'

const apiInstance = new sib.TransactionalEmailsApi()
apiInstance.setApiKey(sib.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!)

export const sendContractEmail = async (toEmail: string, studentName: string, contractHtml: string) => {
  const sendSmtpEmail = new sib.SendSmtpEmail()
  
  sendSmtpEmail.subject = "Your Official Learning Contract - Cobel Training Center"
  sendSmtpEmail.htmlContent = contractHtml
  sendSmtpEmail.sender = { name: "Coulibaly Abel", email: "admin@cobelcbtc.com" }
  sendSmtpEmail.to = [{ email: toEmail, name: studentName }]
  
  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail)
    return { success: true }
  } catch (error) {
    console.error("Email failed:", error)
    return { success: false }
  }
}