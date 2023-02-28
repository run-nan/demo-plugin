import { demo } from "../blocks/demo";
// import { Button as AntdButton } from "antd";
const Antd = demo.connect("core").methods.getAntdComponents();

const { Button, App } = Antd;

export default function Home(props) {
  const { modal } = App.useApp();
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          modal.info({
            title: "Hello",
            content: props.text,
          });
        }}
      >
        {props.text}
      </Button>
    </div>
  );
}
