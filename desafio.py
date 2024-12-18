nomeDoHeroi = input("Digite o nome do seu herói: ")
pontosDeExperiencia = float(input("Digite a quantidade dos seus pontos de EXP: "))

niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante" ]

if pontosDeExperiencia <= 1000:
    print(f"O Herói de nome '{nomeDoHeroi}' está no nível {niveis[0]}.")

elif pontosDeExperiencia > 1000 and pontosDeExperiencia < 2001:
    print(f"O Herói de nome '{nomeDoHeroi}' está no nível {niveis[1]}.")

elif pontosDeExperiencia > 2000 and pontosDeExperiencia < 5001:
    print(f"O Herói de nome '{nomeDoHeroi}' está no nível {niveis[2]}.")

elif pontosDeExperiencia > 5000 and pontosDeExperiencia < 7001:
    print(f"O Herói de nome '{nomeDoHeroi}' está no nível {niveis[3]}.")

elif pontosDeExperiencia > 7000 and pontosDeExperiencia < 8001:
    print(f"O Herói de nome '{nomeDoHeroi}' está no nível {niveis[4]}.")

elif pontosDeExperiencia > 8000 and pontosDeExperiencia < 9001:
    print(f"O Herói de nome '{nomeDoHeroi}' está no nível {niveis[5]}.")

elif pontosDeExperiencia > 9000 and pontosDeExperiencia <= 10000:
    print(f"O Herói de nome '{nomeDoHeroi}' está no nível {niveis[6]}.")

else:
    print(f"O Herói de nome '{nomeDoHeroi}' está no nível {niveis[7]}.")


print(f"Boa Sorte em sua Aventura '{nomeDoHeroi}'!")
