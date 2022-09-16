import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import Cryptos from "../components/Crypto";
import store from "../Redux/configStore";

it("Cryptos renders correctly", () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Cryptos />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
