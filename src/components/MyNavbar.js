import { Navbar, Link } from '@nextui-org/react';

export default function MyNavBar() {
  const collapseItems = ['Home', 'Blog', 'Projects', 'About'];
  return (
    <Navbar variant="floating">
      {/* <Navbar isBordered variant="sticky"> */}
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        <p>My Site</p>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="highlight"
      >
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/blogPage">Blog</Navbar.Link>
        <Navbar.Link href="/projectsPage">Projects</Navbar.Link>
        <Navbar.Link href="/aboutPage">About</Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        <Navbar.CollapseItem>
          <Link href="/">Home</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="/blogPage">Blog</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="/projectsPage">Projects</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="/aboutPage">About</Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
