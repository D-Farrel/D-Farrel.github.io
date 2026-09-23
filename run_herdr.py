import json, subprocess, sys

def run(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return r.stdout.strip()

# Current pane (Orchestrator - Kiri Atas)
p0 = json.loads(run('herdr pane current --current'))["result"]["pane"]["pane_id"]
print(f"[OK] Orchestrator pane: {p0}")

# Split Kanan (Kanan Atas)
p1 = json.loads(run('herdr pane split --current --direction right --no-focus'))["result"]["pane"]["pane_id"]
print(f"[OK] UI/UX pane: {p1}")

# Split Bawah dari Kiri (Kiri Bawah)
p2 = json.loads(run(f'herdr pane split --pane "{p0}" --direction down --no-focus'))["result"]["pane"]["pane_id"]
print(f"[OK] Frontend pane: {p2}")

# Split Bawah dari Kanan (Kanan Bawah)
p3 = json.loads(run(f'herdr pane split --pane "{p1}" --direction down --no-focus'))["result"]["pane"]["pane_id"]
print(f"[OK] Reviewer pane: {p3}")

# Start 3 agents
run(f'herdr agent start uiux --kind pi --pane "{p1}"')
print("[OK] UI/UX agent started")
run(f'herdr agent start frontend --kind pi --pane "{p2}"')
print("[OK] Frontend agent started")
run(f'herdr agent start reviewer --kind pi --pane "{p3}"')
print("[OK] Reviewer agent started")

print("\n[READY] All panes split, all agents started. Dispatching tasks...")
