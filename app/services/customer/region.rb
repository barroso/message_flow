require 'uri'
require 'net/http'
require 'openssl'
require 'base64'

class Region
    def executar
        url = URI("https://track.customer.io/api/v1/accounts/region")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)

        puts "# # # # Get Key # # # #"
        key = ENV["CUSTOMERIO_KEY"]
        request["Authorization"] = "Basic " + Base64.encode64(key.to_s).strip        
        response = http.request(request)

        puts "# # # # Get Region # # # #"
        puts response.read_body

        response.read_body
    end
end