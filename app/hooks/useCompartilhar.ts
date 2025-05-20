"use client";

export const useCompartilhar = () => {
  const compartilhar = async (url: string, titulo?: string, texto?: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: titulo || "Confira este produto!",
          text: texto || "Dá uma olhada nesse link que eu encontrei!",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copiado para a área de transferência!");
      }
    } catch (error) {
      console.error("Erro ao compartilhar:", error);
      alert("Não foi possível compartilhar.");
    }
  };

  return { compartilhar };
};
