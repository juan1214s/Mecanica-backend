import { Module } from '@nestjs/common';
import { ConsultasFechasService } from './consultas-fechas.service';
import { ConsultasFechasController } from './consultas-fechas.controller';
import { Pedidos } from "../pedidos/pedidos.entity"
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from "../carrito/carrito.entity"
import { Productos } from "../productos/productos.entity"
import { Usuarios } from "../usuarios/usuarios.entity"




@Module({
  imports: [TypeOrmModule.forFeature([Pedidos, Carrito, Productos, Usuarios])],
  providers: [ConsultasFechasService],
  controllers: [ConsultasFechasController]
})
export class ConsultasFechasModule {}
