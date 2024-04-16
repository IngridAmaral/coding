import { ReactNode } from "react";
import Layout from "./Layout";

const App = ({ children }: { children?: ReactNode }) => (
  <Layout>{children}</Layout>
);

export default App;
