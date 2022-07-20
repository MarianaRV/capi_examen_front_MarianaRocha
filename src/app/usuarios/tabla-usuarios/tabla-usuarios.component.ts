import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss'],
  providers: [UsuariosService]
})
export class TablaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios.map((usuario: any) =>
          new Usuario().deserialize(usuario)
        );
      }
    );
  }
}
