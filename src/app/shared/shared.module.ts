import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { IntroComponent } from "./component/intro/intro.component";
import { LayoutComponent } from "./component/layout/layout.component";

const COMMON_COMPONENTS = [
    LayoutComponent,
    IntroComponent
]

const COMMON_MODULES = [
    IonicModule
]

@NgModule({
    declarations: [COMMON_COMPONENTS, COMMON_MODULES],
    exports: [COMMON_COMPONENTS, COMMON_MODULES]
})

export class SharedModule { }