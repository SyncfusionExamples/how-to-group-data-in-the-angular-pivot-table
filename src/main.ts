import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCfEx0THxbf1x0ZFJMY1hbRX5PMyBoS35RckViWn9ed3dRR2lcUkJw");

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
