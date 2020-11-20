export function bootstrap(props) {
  return Promise.resolve().then(() => {
    console.log("bootstrap");
  });
}
export function mount(props) {
  return Promise.resolve().then(() => {
    console.log("mount");
  });
}
export function unmount(props) {
  return Promise.resolve().then(() => {
    console.log("unmount");
  });
}
