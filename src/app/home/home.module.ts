import {forwardRef, HttpModule, Module} from '@nestjs/common';
import {ContractModule} from '../contract/contract.module';
import {HomeService} from './home.service';
import {HomeResolver} from './home.resolver';
import {homeProviders} from './home.providers';
import {DatabaseModule} from '../database/database.module';
import {AttomDataApiService} from './attom-data-api.service';
import {UserModule} from '../user/user.module';
import {HomeMediaModule} from '../home-media/home-media.module';
import {HomeFavoriteModule} from '../home-favorite/home-favorite.module';
import {HomeCommand} from './home.command';
import {HomeVoter} from './security/home.voter';
import {HomeController} from './home.controller';
import {HomePipe} from './pipe/home.pipe';
import {HomePdfService} from './home-pdf.service';

const PROVIDERS = [
	...homeProviders,
	HomeService,
	HomePdfService,
	HomeResolver,
	AttomDataApiService,
	HomeVoter,
	HomeCommand,
	HomePipe
];

const MODULES = [
	HttpModule,
	DatabaseModule,
	UserModule,
	HomeFavoriteModule,
	HomeMediaModule,
	forwardRef(() => ContractModule)
];

@Module({
	controllers: [HomeController],
	providers: [...PROVIDERS],
	imports: [...MODULES],
	exports: [HomeService]
})
export class HomeModule {

}
