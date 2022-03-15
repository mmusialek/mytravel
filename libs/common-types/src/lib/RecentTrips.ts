export interface IRecentTrip {
  id: string;
  image: IImageData;
  title: string;
  stayCount: number;
  destinationCount: number;
  rating: number;

  price: Price;
}

export interface Price {
  price: number;
  promoPrice: number;
  currency: string;
  symbol: string;
}

export interface IImageData {
  imagePath: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}
