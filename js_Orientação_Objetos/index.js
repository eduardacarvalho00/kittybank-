/* 
const cliente1Nome = "ricardo";
const cliente1CPF = 11122233387;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

alternativa para isso é fazer uma classe 
*/
import { Cliente } from "./Cliente.js"
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678990);
diretor.cadastrarSenha(222333);
const gerente = new Gerente("Pamela", 5000, 34567812345);
gerente.cadastrarSenha(123);

const cliente = new Cliente("Paula", 33344455590, "456");

const gerenteEstalogado = SistemaAutenticacao.login(diretor, "222333");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 456)

console.log(gerenteEstalogado, diretorEstaLogado, clienteEstaLogado);