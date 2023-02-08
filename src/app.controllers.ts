import { Controller, Get} from "@nestjs/common";

@Controller()
export class AppController{
    @Get("/get")
    getRootRoute(){
        return 'hi there'
    }
}
