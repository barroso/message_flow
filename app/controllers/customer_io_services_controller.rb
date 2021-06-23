require_relative '../services/customer/region'

class CustomerIoServicesController < ApplicationController
    def region
        region = Region.new.executar
        render json: region, status: :ok
    end
end
