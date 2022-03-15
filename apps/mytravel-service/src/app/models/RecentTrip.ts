import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class IRecentTrip {
  image: IImageData;

  @ApiProperty({
    description: "Trip identificator.",
    example: "111-qwe",
    type: "string",
  })
  id: string;

  @ApiProperty({
    description: "Trip title.",
    example: "Italian Espresso",
    type: "string",
  })
  title: string;

  @ApiProperty({
    description: "Total lenght for the trip.",
    example: 11,
    type: "number",
  })
  stayCount: number;

  @ApiProperty({
    description: "Countries intluded in given trip.",
    example: 5,
    type: "number",
  })
  destinationCount: number;

  @ApiProperty({
    description: "Trip rating",
    example: 4.5,
    type: "number",
  })
  rating: number;

  @ApiProperty()
  price: Price;
}

export class Price {
  @ApiProperty({
    description: "Standard price for the trip.",
    example: 2200.99,
    type: "number",
  })
  price: number;

  @ApiProperty({
    description: "Promotion price for the trip.",
    example: 1900.99,
    type: "number",
  })
  promoPrice: number;

  @ApiProperty({
    description: "Currency code like EUR, USD...",
    example: "EUR",
    type: "string"
  })
  currency: string;

  @ApiProperty({
    description: "Currency symbol like $",
    example: "€",
    type: "string"
  })
  symbol: string;
}

export class IImageData {
  @ApiProperty({
    description: "Relative path to the image.",
    example: "/path/to/image.jpg",
    type: "string"
  })
  imagePath: string;

  @ApiProperty({
    description: "Alternate text for an image.",
    example: "/path/to/image.jpg",
    type: "string"
  })
  alt: string;

  @ApiPropertyOptional({
    description: "Image width represented",
    example: 500,
    type: "number"
  })
  width?: number;

  @ApiPropertyOptional({
    description: "Image height represented",
    example: 350,
    type: "number"
  })
  height?: number;
}
