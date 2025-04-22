using EcommerceApi.Data;
using EcommerceApi.Dto;
using EcommerceApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EcommerceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;
        public OrdersController(AppDbContext context)
        {
            _context = context;
        }

       [HttpPost]
       public async Task<ActionResult<ResponseModel<Pedido>>> CriarPedido([FromBody] CriarPedidoDto criarPedidoDto)
        {
            ResponseModel<Pedido> response = new ResponseModel<Pedido>();

            if (criarPedidoDto.Itens == null || !criarPedidoDto.Itens.Any()) 
            {
                response.Message = "O pedido precisa de pelo menos um item";
                return BadRequest(response);
            }

            var pedido = new Pedido
            {
                Itens = criarPedidoDto.Itens.Select(item => new ItemPedido
                {
                    Id = item.IdProduto,
                    Quantidade = item.Quantidade,
                    PrecoUnitario = item.PrecoUnitario,

                }).ToList(),
            };

            _context.Pedidos.Add(pedido);
            await _context.SaveChangesAsync();

            response.Dados = pedido;
            response.Status = true;
            response.Message = "Pedido criado com sucesso";

            return Ok(response);
        }

        [HttpGet]
        public async Task<ActionResult<ResponseModel<List<Pedido>>>> MostrarPedido()
        {
            ResponseModel<List<Pedido>> response = new ResponseModel<List<Pedido>>();

            var pedido = await _context.Pedidos
                .Include(p => p.Itens).ThenInclude(i => i.Produto) //uso do Lazy Loading 
                .ToListAsync();

            if (pedido == null || !pedido.Any())
            {
                response.Message = "Nenhum pedido encontrado";
                return NotFound(response);
            }

            response.Dados = pedido;
            response.Status = true;
            response.Message = "Lista de pedidos carregada com sucesso";
            
            return Ok(response);
        }

    }
}
