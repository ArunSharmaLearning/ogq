'use client'
import { API_URL } from "@/constants/api";
import { useRouter } from "@/hooks/use-router";
import { useAPI } from "@/hooks/use-swr";
import Loading from "../loading";

const CSRPolicy = () => {
	const { data: policy } = useAPI('csr')
	const router = useRouter()
	if (policy) {
		router.replace(API_URL + policy.file)
	}

	return (
		<Loading />
	)
};

export default CSRPolicy;
