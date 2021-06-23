class PanelsController < ApplicationController
    def index
        render json: [1,2,4], status: :ok
    end
end
