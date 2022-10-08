.PHONY: clear-screen compress

ROOT_DIR := lib
API_DIR := lib/api
BUILD_DIR := lib/build
JSON_DIR := lib/json
PTCP_DIR := lib/participants
REACH_DIR := lib/reach-helpers
UTILS_DIR := lib/utils
TOP_LEVEL := $(shell find $(BUILD_DIR) -name '*.js')
MIN := uglifyjs -o

clear-screen:
	@clear

compress: $(TOP_LEVEL)
	make clear-screen
	@echo "Compressing all JS files $(ROOT_DIR) ...\n\n"
	@$(foreach file, $(wildcard $(ROOT_DIR)/*.js), echo "\n + Compressing $(file)"; $(MIN) $(file) -- $(file);)
	@$(foreach file, $(wildcard $(API_DIR)/*.js), echo "\n + Compressing $(file)"; $(MIN) $(file) -- $(file);)
	@$(foreach file, $(wildcard $(BUILD_DIR)/*.js), echo "\n + Compressing $(file)"; $(MIN) $(file) -- $(file);)
	@$(foreach file, $(wildcard $(JSON_DIR)/*.js), echo "\n + Compressing $(file)"; $(MIN) $(file) -- $(file);)
	@$(foreach file, $(wildcard $(PTCP_DIR)/*.js), echo "\n + Compressing $(file)"; $(MIN) $(file) -- $(file);)
	@$(foreach file, $(wildcard $(REACH_DIR)/*.js), echo "\n + Compressing $(file)"; $(MIN) $(file) -- $(file);)
	@$(foreach file, $(wildcard $(UTILS_DIR)/*.js), echo "\n + Compressing $(file)"; $(MIN) $(file) -- $(file);)
	@echo 
	@echo "All files compressed!"
	@exit 0
