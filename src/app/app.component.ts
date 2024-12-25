import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from "./footer/footer.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, BodyComponent, FooterComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Swaminathan-PortFolio';
}
