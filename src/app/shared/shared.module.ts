import { NgModule } from "@angular/core";
import { TimeComponent } from "./time/time.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    NotFoundComponent,
    TimeComponent
  ],
  exports: [
    NotFoundComponent,
    TimeComponent
  ]
})
export class SharedModule {}
