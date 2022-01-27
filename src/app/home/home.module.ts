import { NgModule } from "@angular/core";
import { SwiperModule } from "swiper/angular";
import { BanerComponent } from "./componets/baner/baner.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./componets/home/home.component";

import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        BanerComponent,
        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SwiperModule,
        SharedModule
    ]
})

export class HomeModule {

}