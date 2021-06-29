require "customerio"

class SendEmail
    def executar
        client = Customerio::APIClient.new("TOKEN")
        
        request = Customerio::SendEmailRequest.new(
          to: "bla@gmail.com",
          transactional_message_id: "",
          identifiers: {
            email: "bla@gmail.com",
          },
          from: "email@bla.com.br",
          subject: "Test Api Customer.io",
          body: "Olá Api, estamos testando.",
        )
        
        begin
          response = client.send_email(request)
          puts "success", response
        rescue Customerio::InvalidResponse => e
          puts "fail", e.message, e.code, e.response
        end
    end
end