require_relative '../services/customer/region'

class MessagesController < ApplicationController
    def index
        messages = Message.all
        render json: messages, status: :ok
    end

    def create
        subject = ["Contrato", "Novidades"].sample
        body = ["Opa, vamos enviar seu contrato", "Contrato assinando, parabéns!!"].sample

        message = Message.create(email: params[:email], body: body, subject: subject)
        render json: message, status: :ok
    end
end
