using EcommerceApi.Data;
using EcommerceApi.Dto;
using EcommerceApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EcommerceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;
        
        public ProductsController(AppDbContext context)
        {
            _context = context;
          
        }

        [HttpGet]

        public async Task<ActionResult<ResponseModel<List<Produto>>>> BuscarProdutos()
        {
            ResponseModel<List<Produto>> response = new ResponseModel<List<Produto>>();

            var produtos = await _context.Produtos.ToListAsync();

            if (!produtos.Any()) 
            {
                response.Message = "Nenhum produto encontrado";
                return response;
            }

            response.Dados = produtos;
            response.Status = true;
            response.Message = "Produtos encontrados com sucesso";
            return Ok(response);

        }

        [HttpPost]
        public async Task<ActionResult<ResponseModel<List<Produto>>>> CriarProduto(CriarProdutoDto criarProdutoDto)
        {
            ResponseModel<List<Produto>> response = new ResponseModel<List<Produto>>();

            var produto = new Produto()
            {
                Nome = criarProdutoDto.Nome,
                Preco = criarProdutoDto.Preco,
                ImagemUrl = criarProdutoDto.ImagemUrl
            };

            _context.Add(produto);
            await _context.SaveChangesAsync();

            response.Dados = await _context.Produtos.ToListAsync();
            response.Status = true;
            response.Message = "Produto criado com sucesso";
            return Ok(response);
        }

    }
}
