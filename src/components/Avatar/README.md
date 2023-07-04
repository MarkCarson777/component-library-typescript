# Avatar Component Documentation

The Avatar component is a React component that displays an avatar image with customisable properties such as size, shape, and click functionality.

## Usage

To use the Avatar component, import it and render it with the desired props:

        <Avatar
          name="John Doe"
          imageUrl="https://example.com/avatar.jpg"
          size="m"
          shape="circle"
          className="custom-avatar"
          onClick={() => {
            console.log("Avatar clicked");
          }}
        />

## Props

The Avatar component accepts the following props:

**name** (_string_, _required_): The name of the avatar user.

**imageUrl** (_string_, required\*): The URL of the image to be displayed as the avatar.

**size** (_"xs" | "s" | "m" | "l" | "xl"_, _required_): Specifies the size of the avatar. Available options are:

"xs" (extra small).\
"s" (small).\
"m" (medium).\
"l" (large).\
"xl" (extra large).

**shape** (_"circle" | "square" | "rectangle"_, _required_): Specifies the shape of the avatar. Available options are:

"circle".\
"square".\
"rectangle".

**className** (_string_): Additional CSS classes to be applied to the avatar container.

**onClick** (_() => void_): An optional click event handler for the avatar.

## Styling

In addition to the default classes, you can apply custom CSS classes by passing them through the className prop. These classes will be added to the container's className attribute.
