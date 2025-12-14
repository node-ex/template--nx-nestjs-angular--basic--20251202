import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private http = inject(HttpClient);

  fetchData(): void {
    this.http.get<{ message: string }>('/api').subscribe((data) => {
      console.log(data.message);
    });
  }
}
