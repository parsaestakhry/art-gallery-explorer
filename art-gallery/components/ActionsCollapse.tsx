
export const ActionsCollapse = () => {
  return (
    <div>
      <div className="collapse bg-base-200 sm:hidden ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
