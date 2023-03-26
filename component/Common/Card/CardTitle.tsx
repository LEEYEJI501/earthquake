type props = { title: string; addClass?: string };

export default function CardTitle(props: props) {
  return (
    <>
      <div className={`!text-20px font-bold text-left ${props.addClass}`}>
        {props.title}
      </div>
    </>
  );
}
