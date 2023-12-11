import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h3>Comentarios:</h3>
      <img src="https://definicion.de/wp-content/uploads/2010/08/comentario-1.png" alt="Comment">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum dolores nostrum accusamus ipsum rem quisquam itaque exercitationem et. Corrupti incidunt labore ipsum error quidem mollitia non fuga. Voluptatem, consectetur!
      </p>
    </div>
  `,
  styles: `

    div {
      text-align: center;
    }

    h3 {
      text-align: center;
      padding-top: 38px;
    }

    img {
      width: 70%;
    }
  `
})
export class CommentsComponent {

}
