type props = { title: string; addClass?: string };

export default function CardSubTitle(props: props) {
  return (
    <>
      <div className={`!text-base text-gray-600 text-left ${props.addClass}`}>
        {props.title}
      </div>
    </>
  );
}
