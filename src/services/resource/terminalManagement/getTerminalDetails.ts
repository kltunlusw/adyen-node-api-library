import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class GetTerminalDetails extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.terminalManagementEndpoint}/${Client.TERMINAL_MANAGEMENT_API_VERSION}/getTerminalDetails`
        );
    }
}

export default GetTerminalDetails;