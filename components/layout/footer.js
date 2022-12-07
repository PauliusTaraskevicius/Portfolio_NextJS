function Footer() {
  const year = new Date();
  const getCurrentYear = year.getFullYear();

  return (
    <footer className="relative pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center text-zinc-500">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright ©{" "}
              <span id="get-current-year">Paulius Taraškevičius </span>
              <span className="text-blueGray-500 hover:text-blueGray-800">
                {getCurrentYear}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
