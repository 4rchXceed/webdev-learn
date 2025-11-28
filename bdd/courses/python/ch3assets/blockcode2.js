window["bddcontent"] = `
import random
import time

# ASCII Art and emojis for Robots, Projectiles and Battle
ROBOT1_ART = '🤖'  # Robot 1 (uses an explosion emoji)
ROBOT2_ART = '🛸'  # Robot 2 (uses a fire emoji)

PROJECTILE_DOWN = '⬇'  # Projectile emoji
PROJECTILE_UP = '⬆'  # Projectile emoji

BATTLE_START_ART = '''
   * * *  Virtual Robot Battle! * * *
'''

# Robot Class
class Robot:
    def __init__(self, name, health, attack, speed, symbol, pos):
        self.name = name
        self.health = health
        self.attack = attack
        self.speed = speed
        self.symbol = symbol
        self.alive = True
        self.old_symbol = ""
        self.position = [random.randint(1, 8), pos]  # Starting position is random on the field

    def take_damage(self, damage):
        self.health -= damage
        self.old_symbol = self.symbol
        self.symbol = "⭕"
        if self.health <= 0:
            self.health = 0
            self.alive = False

    def attack_opponent(self, opponent):
        if self.alive:
            damage = random.randint(1, self.attack)
            print(f"{self.name} attacks {opponent.name} for {damage} damage!")
            opponent.take_damage(damage)

    def move(self):
        if self.alive:
            direction = random.choice(['left', 'right'])
            if direction == 'left' and self.position[0] > 1 and self.position[0] > 0 and self.position[0] < 10:
                self.position[0] -= 1
            elif direction == 'right' and self.position[0] < 8:
                self.position[0] += 1

    def get_status(self):
        return f"{self.name} - Health: {self.health} " + self.display_health()

    def display_health(self):
        if self.old_symbol != "":
            self.symbol = self.old_symbol
            self.old_symbol = ""
        full_health = 10
        health_bar = "■" * (self.health // 2) + " " * (self.health - full_health // 2)
        return f"[{health_bar}] {self.health}/10"
`;