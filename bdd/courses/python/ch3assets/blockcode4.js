window["bddcontent"] = `
import random

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

# Projectile Class
class Projectile:
    def __init__(self, position, direction, owner):
        self.position = position
        self.direction = direction  # Direction of the projectile
        self.owner = owner
        self.alive = True

    def move(self):
        if self.direction == 'right':
            self.position[0] += 1
        elif self.direction == 'left':
            self.position[0] -= 1
        elif self.direction == 'up':
            self.position[1] -= 1
        elif self.direction == 'down':
            self.position[1] += 1

    def check_collision(self, robot):
        if self.position == robot.position:
            print(f"{self.owner.name}'s projectile hit {robot.name}!")
            robot.take_damage(1)  # Deal 1 damage for each hit
            self.alive = False

# Battle Class
class Battle:
    def __init__(self, robot1, robot2):
        self.robot1 = robot1
        self.robot2 = robot2
        self.projectiles = []

    def start_fight(self):
        print(BATTLE_START_ART)
        self.print_battlefield()
        while self.robot1.alive and self.robot2.alive:
            self.robot1.move()
            self.robot2.move()

            # Robot 1 attacks
            if random.random() < 0.5:  # 50% chance to fire a projectile
                self.fire_projectile(self.robot1, self.robot2)

            # Robot 2 attacks
            if random.random() < 0.5:  # 50% chance to fire a projectile
                self.fire_projectile(self.robot2, self.robot1)

            self.update_projectiles()

            self.print_battlefield()

        self.declare_winner()

    def fire_projectile(self, attacker, defender):
        # Fire a projectile from the attacker
        direction = self.get_projectile_direction(attacker, defender)
        projectile = Projectile(list(attacker.position), direction, attacker)
        self.projectiles.append(projectile)

    def get_projectile_direction(self, attacker, defender):
        if attacker.position[1] < defender.position[1]:
            return 'down'
        else:
            return 'up'

    def update_projectiles(self):
        for projectile in self.projectiles[:]:
            projectile.move()
            if projectile.alive:
                if projectile.owner == self.robot1:
                    projectile.check_collision(self.robot2)
                else:
                    projectile.check_collision(self.robot1)
            else:
                self.projectiles.remove(projectile)

    def print_battlefield(self):
        battlefield = [[" " for _ in range(10)] for _ in range(8)]

        # Place robots
        r1_x, r1_y = self.robot1.position
        r2_x, r2_y = self.robot2.position
        if 0 <= r1_x < 10 and 0 <= r1_y < 8:
            battlefield[r1_y][r1_x] = self.robot1.symbol
        if 0 <= r2_x < 10 and 0 <= r2_y < 8:
            battlefield[r2_y][r2_x] = self.robot2.symbol

        # Place projectiles
        for projectile in self.projectiles:
            px, py = projectile.position
            if 0 <= px < 10 and 0 <= py < 8:
                symbol = PROJECTILE_DOWN
                if projectile.direction == "up":
                    symbol = PROJECTILE_UP
                battlefield[py][px] = symbol

        # Display battlefield
        print("##########")
        for row in battlefield:
            print("#" + "".join(row) + "#")
        print("##########")

        # Display robot statuses
        print(f"\n{self.robot1.get_status()}  [R1]")
        print(f"{self.robot2.get_status()}  [R2]")

    def declare_winner(self):
        if self.robot1.alive:
            print(f"\n{self.robot1.name} wins the battle!")
        else:
            print(f"\n{self.robot2.name} wins the battle!")

# Start the Battle
robot1 = Robot("Robot 1", 10, 5, 3, ROBOT1_ART, 1)
robot2 = Robot("Robot 2", 10, 6, 2, ROBOT2_ART, 7)

battle = Battle(robot1, robot2)
battle.start_fight()

`;