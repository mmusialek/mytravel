import renderer from "react-test-renderer";
import { ProgresIndicator } from "../ProgresIndicator";

describe('ProgresIndicator', () => {
  it('should render', () => {
    const comp = renderer.create(<ProgresIndicator />).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
