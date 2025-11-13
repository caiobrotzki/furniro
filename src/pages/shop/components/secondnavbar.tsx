import { useState, useEffect } from "react";
import IconFilter from "../../../assets/icon-filter.svg";
import IconNav from "../../../assets/icon-nav.svg";
import IconNav2 from "../../../assets/icon-nav2.svg";

function Nav() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Bloqueia o scroll quando o modal está aberto
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterOpen]);
  const [selectedFilters, setSelectedFilters] = useState<{
    price: string[];
    category: string[];
    color: string[];
    size: string[];
  }>({
    price: [],
    category: [],
    color: [],
    size: [],
  });

  const filterOptions = {
    price: ["Under $100", "$100 - $500", "$500 - $1000", "Over $1000"],
    category: ["Chairs", "Tables", "Sofas", "Beds", "Lighting"],
    color: ["Red", "Blue", "Green", "Yellow", "Brown", "Black", "White"],
    size: ["Small", "Medium", "Large", "Extra Large"],
  };

  const toggleFilter = (category: string, option: string) => {
    setSelectedFilters((prev) => {
      const current = (prev[category as keyof typeof prev] as string[]) || [];
      if (current.includes(option)) {
        return {
          ...prev,
          [category]: current.filter((item: string) => item !== option),
        };
      } else {
        return {
          ...prev,
          [category]: [...current, option],
        };
      }
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      price: [],
      category: [],
      color: [],
      size: [],
    });
  };

  return (
    <>
      <div className="w-full h-auto md:h-[85px] bg-[#F9F1E7] flex flex-col md:flex-row justify-between items-start md:items-center p-3 md:p-0 md:pl-20 md:pr-20 gap-3 md:gap-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 w-full md:w-auto text-xs sm:text-sm md:text-base">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-70 transition"
          >
            <img src={IconFilter} alt="" className="w-[19px] h-[16px]" />
            <p className="text-[14px] sm:text-[16px]">Filter</p>
          </button>
          <img src={IconNav} alt="" className="w-[19px] h-[16px] hidden sm:block" />
          <img src={IconNav2} alt="" className="w-[19px] h-[16px] hidden sm:block" />
          <div className="border-l border-black h-6 mx-2 hidden sm:block"></div>
          <p className="text-[12px] sm:text-[14px] md:text-base">Showing 1–16 of 32 results</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 w-full md:w-auto text-xs sm:text-sm md:text-base">
          <p>Show</p>
          <p className="bg-white text-[#9F9F9F] w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] flex justify-center items-center text-xs sm:text-base">
            16
          </p>
          <p>Short by</p>
          <p className="bg-white text-[#9F9F9F] w-full sm:w-[120px] md:w-[188px] h-[45px] sm:h-[55px] flex justify-center items-center text-xs sm:text-base">
            Default
          </p>
        </div>
      </div>

      {/* Modal de Filtro */}
      {isFilterOpen && (
        <>
          {/* Overlay com blur */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setIsFilterOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed left-3 sm:left-20 top-[120px] sm:top-[200px] bg-white rounded-lg shadow-lg z-50 w-[calc(100vw-24px)] sm:w-96 md:w-80 max-h-[70vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#B88E2F]">Filtros</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-2xl font-bold text-gray-500 hover:text-[#B88E2F]"
                >
                  ×
                </button>
              </div>

              {/* Filtro por Preço */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-[#B88E2F]">Preço</h3>
                <div className="space-y-2">
                  {filterOptions.price.map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.price.includes(option)}
                        onChange={() => toggleFilter("price", option)}
                        className="w-4 h-4 mr-3 accent-[#B88E2F]"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro por Categoria */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-[#B88E2F]">Categoria</h3>
                <div className="space-y-2">
                  {filterOptions.category.map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.category.includes(option)}
                        onChange={() => toggleFilter("category", option)}
                        className="w-4 h-4 mr-3 accent-[#B88E2F]"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro por Cor */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-[#B88E2F]">Cor</h3>
                <div className="space-y-2">
                  {filterOptions.color.map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.color.includes(option)}
                        onChange={() => toggleFilter("color", option)}
                        className="w-4 h-4 mr-3 accent-[#B88E2F]"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro por Tamanho */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-[#B88E2F]">Tamanho</h3>
                <div className="space-y-2">
                  {filterOptions.size.map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.size.includes(option)}
                        onChange={() => toggleFilter("size", option)}
                        className="w-4 h-4 mr-3 accent-[#B88E2F]"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={clearFilters}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                >
                  Limpar
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 px-4 py-2 bg-[#B88E2F] text-white rounded text-sm font-medium hover:bg-[#a17b28] hover:scale-105 transition-all duration-300"
                >
                  Aplicar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Nav;
