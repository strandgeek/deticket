ifneq (,$(wildcard ./.env))
    include .env
    export
endif

compile:
	rm -rf build/*
	~/smartpy-cli/SmartPy.sh compile ./deticket/deticket.py ./build

deploy: compile
	~/smartpy-cli/SmartPy.sh originate-contract \
		--code ./build/de_ticket_nft_tokens/step_000_cont_0_contract.tz \
		--storage ./build/de_ticket_nft_tokens/step_000_cont_0_storage.tz \
		--rpc ${RPC_URL} \
		--private-key=${ACCOUNT_PRIVATE_KEY}

test:
	~/smartpy-cli/SmartPy.sh test ./deticket/deticket.py .test_out --purge
