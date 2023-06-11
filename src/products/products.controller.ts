import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generateId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generateId };
  }
  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  @Get()
  getProduct(@Param() prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }
}
