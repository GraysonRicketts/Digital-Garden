export default function Index() {
  return (
    <div>
      <h1>🏡 Grayson's digital garden</h1>

      <p>Hi, I'm Grayson. I'm a software engineer and a climber.</p>
      <p>This is where I share thoughts and projects I'm working on.</p>

      <p>
        {" "}
        If you're unfamiliar with what a digital garden is,&nbsp;
        <a href="https://maggieappleton.com/garden-history" target="_blank">
          check out the original essay
        </a>{" "}
        on the concept from Maggie Appleton.{" "}
        <a href="https://joelhooks.com/digital-garden" target="_blank">
          {" "}
          This is also a good read
        </a>{" "}
        by Joel Hooks.
      </p>

      <div>
        <h5>My personal recommendations</h5>
        <ul>
          <li>thing 1</li>
        </ul>
      </div>

      <div>
        <h5>Topics</h5>
        <ul>
          {/* TODO: Add tags */}
        </ul>
      </div>
    </div>
  );
}
