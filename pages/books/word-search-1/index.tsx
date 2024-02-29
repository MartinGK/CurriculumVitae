import { useRouter } from "next/navigation";

export default function WordBook1() {
  const router = useRouter();
  router.push("https://www.amazon.com/review/create-review/ref=cm_cr_othr_d_wr_but_top?ie=UTF8&channel=glance-detail&asin=B0CWPMCJJC");
}