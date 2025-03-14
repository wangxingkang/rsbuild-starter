interface ButtonProps {
  text?: string;
}

export function Button(props: ButtonProps) {
  return (
    <div style={{ color: 'red' }}>
      我是按钮
      {props.text}
    </div>
  );
}
