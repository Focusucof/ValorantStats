import re
import aiohttp
import asyncio
import json
from dotenv import load_dotenv
import os

load_dotenv()

f = open("Auth.txt", 'w')

async def run(username, password):
    session = aiohttp.ClientSession()
    data = {
        'client_id': 'play-valorant-web-prod',
        'nonce': '1',
        'redirect_uri': 'https://playvalorant.com/opt_in',
        'response_type': 'token id_token',
    }
    await session.post('https://auth.riotgames.com/api/v1/authorization', json=data)

    data = {
        'type': 'auth',
        'username': os.getenv('USERNAME'),
        'password': os.getenv('PASSWORD')
    }
    f.write('Account:\n\n' + data['username'])
    f.write('\n\n')
    async with session.put('https://auth.riotgames.com/api/v1/authorization', json=data) as r:
        data = await r.json()
    print(data)
    pattern = re.compile('access_token=((?:[a-zA-Z]|\d|\.|-|_)*).*id_token=((?:[a-zA-Z]|\d|\.|-|_)*).*expires_in=(\d*)')
    data = pattern.findall(data['response']['parameters']['uri'])[0]
    access_token = data[0]
    print('Access Token: ' + access_token)
    f.write('Access Token:\n\n' + access_token)
    f.write('\n\n')
    id_token = data[1]
    expires_in = data[2]

    headers = {
        'Authorization': f'Bearer {access_token}',
    }
    async with session.post('https://entitlements.auth.riotgames.com/api/token/v1', headers=headers, json={}) as r:
        data = await r.json()
    entitlements_token = data['entitlements_token']
    print('Entitlements Token: ' + entitlements_token)
    f.write('Entitlements Token:\n\n' + entitlements_token)
    f.write('\n\n')

    async with session.post('https://auth.riotgames.com/userinfo', headers=headers, json={}) as r:
        data = await r.json()
    user_id = data['sub']
    print('User ID: ' + user_id)
    f.write('User ID:\n\n' + user_id)

    headers['X-Riot-Entitlements-JWT'] = entitlements_token
    
    # Example Request. (Access Token and Entitlements Token needs to be included!)
    async with session.post(f'https://pd.na.a.pvp.net/name-service/v1/players', headers=headers) as r:
        data = json.loads(await r.text())
    #print(data)

    await session.close()

if __name__ == '__main__':
    asyncio.get_event_loop().run_until_complete(run('exmaple user name', 'my_secret_password'))