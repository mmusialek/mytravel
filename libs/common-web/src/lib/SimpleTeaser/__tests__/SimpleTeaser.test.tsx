import renderer from "react-test-renderer";
import { ISimpleTeaserProps, SimpleTeaser } from "../SimpleTeaser";

describe("SimpleTeaser", () => {
  it("should render", () => {
    const props: ISimpleTeaserProps = {
      image: { imagePath: "image.jpg", alt: "mock image" },
      title: "mock title",
      teaserInfo: "some mock teaser info",
      rating: 3.4,
      currencySymbol: "$",
      priceFromPromo: 111,
      priceFrom: 222,
    };
    const comp = renderer.create(<SimpleTeaser {...props} />).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
