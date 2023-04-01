import Button from './Button';

export default function LayoutCare(props) {
  return (
    <section>
      <h1>CARE</h1>
      <Button as='a' href='http://localhost:9000/care2'>CARE 2</Button>
      <Button as='a' href='http://localhost:9000/care4'>CARE 4</Button>
      <Button as='a' href='http://localhost:9000/carepr'>CARE PR</Button>
    </section>
  );
}
